import { useState } from "react";
import "./laboratory.css";
import { LuCheck, LuFile } from "react-icons/lu";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Laboratory() {
  const [data, setData] = useState({
    targetCol: "",
    test_size: "",
    problemType: "",
  });
  const [dataset, setDataset] = useState(null);
  const [resultAnalysis,setResultAnalysis] = useState(null)
  const [analysing,setAnalysing] = useState(false)

  const {backendUrl} = useContext(AppContext)
  const problems = ["Regression","Classification","NLP"]

  const onSubmitHandler = async () => {

    if(!dataset || !data.problemType || data.targetCol || data.test_size){
      alert("Some Fields Missing")
      return
    }

    setAnalysing(true)
    const formData = new FormData();
    formData.append("file", dataset);
    formData.append("problem_type", data.problemType);
    formData.append("target_column", data.targetCol);
    formData.append("split_ratio", data.test_size);

    const response = await axios.post(
      backendUrl + "/run-analysis",
      formData,
    );

   
    setResultAnalysis(response.data)
    setAnalysing(false)
    console.log(response.data)
  };
  return (
    <div className="laboratory">
      <div className="laboratory-header">
        <h1>Machine Learning Laboratory</h1>
        <p className="laboratory-subtitle">
          Upload your dataset,select the type of problem and compare multiple ML
          Models.
        </p>
      </div>
      <div className="laboratory-main-section">
        <div className="laboratory-content">
          <div className="laboratory-block">
            <span className="laboratory-step">Step 1</span>
            <span className="laboratory-step-title">Select Problem Type</span>
            <div className="laboratory-problem-types">
              {problems.map((problem,idx) => (
                <button
                onClick={() =>
                  setData((prev) => ({ ...prev, problemType: problem }))
                }
                className={`${data.problemType === problem ? "active" : ""}`}
              >
                {problem}
              </button>
              ))}
            </div>
          </div>
          <div className="laboratory-block">
            <span className="laboratory-step">Step 2</span>
            <span className="laboratory-step-title">
              Click to upload Dataset
            </span>
            <label htmlFor="upload-dataset">
            
                {dataset === null ? <i><LuFile /></i> : <i style={{ color: "green"}}><LuCheck /></i>}
                
              
              <input
                type="file"
                name=""
                id="upload-dataset"
                accept=".csv,.xlsx"
                hidden
                onChange={(e) => setDataset(e.target.files[0])}
                required
              />
            </label>
            {dataset !== null ? (
              <span
                style={{ color: "green", fontWeight: "bold", fontSize: "16px" }}
              >
                DataSet Uploaded : {dataset.name}
              </span>
            ) : (
              <span
                style={{ fontWeight: "bold", color: "gray", fontSize: "13px" }}
              >
                Only .csv,.xlsx files supported
              </span>
            )}
          </div>
          <div className="laboratory-block">
            <span className="laboratory-step">Step 3</span>
            <span className="laboratory-step-title">
              Specify Target Column and Split ratio
            </span>

            <input
              type="text"
              placeholder="Specify the target column"
              onChange={(e) =>
                setData((prev) => ({ ...prev, targetCol: e.target.value }))
              }

              value={data.targetCol}
              required
            />
            <input
              type="text"
              placeholder="Specify the train-test split ratio"
              onChange={(e) =>
                setData((prev) => ({ ...prev, test_size: e.target.value }))
              }
              value={data.test_size}
              required
            />
          </div>

          <button className="examine" onClick={onSubmitHandler}>
            Examine
          </button>
        </div>

        {resultAnalysis ?

        <div className="laboratory-results">
          <span className="resilt-problem">Problem Type : {resultAnalysis.
problem_type}</span>
{resultAnalysis?.results?.map((item,idx) => (
  <div className={`model ${resultAnalysis.better_models?.includes(item.model) ? "better_model":""}`}>
            <span>{item.model}</span>
            <ul>
              {item?.metrics?.map((metric,idx) => (<li>{metric.metric} : {metric.value}</li>))}
            </ul>
          </div>
))}

          
          {/* 
          <div className="model">
            <span>Model Name </span>
            <ul>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
            </ul>
          </div>
          <div className="model">
            <span>Model Name </span>
            <ul>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
            </ul>
          </div>
          <div className="model">
            <span>Model Name </span>
            <ul>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
            </ul>
          </div>
          <div className="model">
            <span>Model Name </span>
            <ul>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
            </ul>
          </div>
          <div className="model">
            <span>Model Name </span>
            <ul>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
              <li>metric</li>
            </ul>
          </div>*/}
        </div>:<div className="laboratory-results" style={{justifyContent:"center",alignItems:"center"}}>
          <span style={{color:"blue",fontSize:"13px",fontWeight:"bold"}}>Your Results Appear Here</span>
          {analysing && <p  className="analyse_info">Analysing Data...!</p>}
        </div> }
        <div className="laboratory-info">
          <span>Supported Problem Types</span>

          <div className="laboratory-info-item">
            <span>For Classification</span>
            <ul>
              <li>Logistic Regression</li>
              <li>KNN</li>
              <li>Decision Tree</li>
              <li>Random Forest</li>
              <li>Gradient Boosting</li>
              <li>SVC</li>
              <li>Naive Bayes - GaussianNB</li>
            </ul>
          </div>

          <div className="laboratory-info-item">
            <span>For Regression</span>
            <ul>
              <li>Linear Regression</li>
              <li>Ridge</li>
              <li>Lasso</li>
              <li>KNN</li>
              <li>Gradient Boosting</li>
              <li>SVM</li>
              <li>Decision Tree</li>
              <li>Random Forest</li>
              <li>AdaBoost</li>
            </ul>
          </div>

          <div className="laboratory-info-item">
            <span>For NLP</span>

            <ul>
              <li>Logistic Regression</li>
              <li>Naive Bayes</li>
              <li>Linear SVM</li>
              <li>Random Forest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
