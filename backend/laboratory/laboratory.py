from classification import laboratory_classification
from regression import laboratory_regression
from nlp_classification import laboratory_nlp_classification
from flask import Flask,request,jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return {
        "message":"Server Running Successfully"
    }

@app.route('/run-analysis',methods=["POST"])
def run_analysis():

    try:
        file = request.files['file']
        problem_type = request.form["problem_type"].lower()
        target_column = request.form["target_column"]
        split_ratio = float(request.form["split_ratio"])
        
        df = pd.read_csv(file)
        if target_column not in df.columns:
            return jsonify({"success":False,"message":"Target Column not found"})
        
        laboratory_items = {
        "regression":laboratory_regression,
        "classification":laboratory_classification,
        "nlp_classification":laboratory_nlp_classification
        }
        
        res = laboratory_items[problem_type](df,target_column,split_ratio)
        return jsonify({"success":True,"results":res})
    except:
        return jsonify({"success":False,"message":"An Error Occured.Check Your Inputs"})

    

if __name__ == '__main__':
    app.run(debug=True)
