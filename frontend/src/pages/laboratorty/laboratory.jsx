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

    if(!dataset || !data.problemType || !data.targetCol || !data.test_size){
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

    if(!response.data.success){
      alert(response.data.message)
    }else{
          setResultAnalysis(response.data.results)
    }
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
            <label htmlFor="upload-dataset" className="laboratory-upload-zone">
              {dataset === null ? (
                <div className="upload-placeholder">
                  <i><LuFile /></i>
                  <span className="upload-title">Drag & drop your file here</span>
                  <span className="upload-subtitle">or click to browse from device</span>
                </div>
              ) : (
                <div className="upload-success">
                  <i style={{ color: "green" }}><LuCheck /></i>
                  <span className="upload-title">Dataset selected successfully</span>
                </div>
              )}
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
                style={{ color: "green", fontWeight: "bold", fontSize: "14px", textAlign: "center" }}
              >
                DataSet Uploaded: {dataset.name}
              </span>
            ) : (
              <span
                style={{ fontWeight: "500", color: "#6b7280", fontSize: "12px", textAlign: "center" }}
              >
                Only .csv, .xlsx files supported (Max 50MB)
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
          <span className="result-problem">Problem Type: {resultAnalysis.problem_type}</span>
          {resultAnalysis?.results?.map((item, idx) => {
            const isBetter = resultAnalysis.better_models?.includes(item.model);
            return (
              <div key={idx} className={`model ${isBetter ? "better_model" : ""}`}>
                <div className="model-card-header">
                  <span className="model-name">{item.model}</span>
                  {isBetter && <span className="best-model-badge">⭐ Best Model</span>}
                </div>
                <div className="laboratory-metrics-grid">
                  {item?.metrics?.map((metric, mIdx) => (
                    <div key={mIdx} className="metric-item">
                      <span className="metric-label">{metric.metric}</span>
                      <span className="metric-value">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

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
