import React, { useState } from "react";
import Header from "../layouts/header";

export default function Outletpart() {
  const evaluationOptions = Array.from({ length: 11 }, (_, index) => ({
    value: index,
    label: index === 0 ? "NA" : index.toString(),
  }));

  // State to store selected evaluation values
  const [scores, setScores] = useState({});
  const [inputValues, setInputValues] = useState({
    price_competitiveness: 17,
    innovative_cost_optimization: 9,
    pricing_transparency: 9,
    payment_term: 16,
    innovative_trends_info: 5,
    risk_management_cyber_security: 6,
    vendor_management_inventory: 6,
    lead_times:12,
    reaction_crisis:14,
    responsiveness_rqst:12,
    bcp:14,
    contract:9,
    financial_health:8,
    account_manager:10
  });

  // Handler for input changes
  const handleInputChange = (rowKey, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [rowKey]: value,
    }));
  };

  // Handler for dropdown change
  const handleEvaluationChange = (rowKey, value) => {
    const inputValue = inputValues[rowKey]; // Get the current input value for the row
    const score = inputValue * (value / 100); // Calculate the score
    setScores((prevScores) => ({
      ...prevScores,
      [rowKey]: score.toFixed(2), // Store the score with 2 decimal places
    }));
  };

  // Calculate total score
  const totalScore = Object.values(scores).reduce(
    (total, score) => total + parseFloat(score || 0),
    0
  );

  return (
    <>
      <div className="Outlet-Main">
        <div>
          <Header />
        </div>

        <div className="custom-container">
          <table className="table table-bordered" style={{ marginTop: "80px" }}>
            <tbody>
              {/* Top row with rowspan */}
              <tr>
                <td rowSpan="2"></td>
                <th colSpan="4" className="text-center">
                  H1-2024
                </th>
              </tr>
              <tr>
                <td>Rated Criteria</td>
                <td>Ratio(%) 100%</td>
                <td>Evaluation</td>
                <td>Score</td>
              </tr>

              {/* Rows for each category */}
              <tr>
                <td rowSpan="7">Competitiveness</td>
                <td>Price Competitiveness on tenders</td>
                <td>
                  <input
                    value={inputValues.price_competitiveness}
                    onChange={(e) =>
                      handleInputChange("price_competitiveness", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("price_competitiveness", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["price_competitiveness"] || "NA"}</td>
              </tr>

              <tr>
                <td>Innovative cost optimization solution</td>
                <td>
                  <input
                    value={inputValues.innovative_cost_optimization}
                    onChange={(e) =>
                      handleInputChange("innovative_cost_optimization", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("innovative_cost_optimization", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["innovative_cost_optimization"] || "NA"}</td>
              </tr>

              <tr>
                <td>Pricing transparency</td>
                <td>
                  <input
                    value={inputValues.pricing_transparency}
                    onChange={(e) =>
                      handleInputChange("pricing_transparency", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("pricing_transparency", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["pricing_transparency"] || "NA"}</td>
              </tr>

              <tr>
                <td>Payment term</td>
                <td>
                  <input
                    value={inputValues.payment_term}
                    onChange={(e) =>
                      handleInputChange("payment_term", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("payment_term", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["payment_term"] || "NA"}</td>
              </tr>

              <tr>
                <td>Supplier shares info about innovation new trends ideas and solutions</td>
                <td>
                  <input
                    value={inputValues.innovative_trends_info}
                    onChange={(e) =>
                      handleInputChange("innovative_trends_info", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("innovative_trends_info", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["innovative_trends_info"] || "NA"}</td>
              </tr>

              <tr>
                <td>Risk Management Cyber Security</td>
                <td>
                  <input
                    value={inputValues.risk_management_cyber_security}
                    onChange={(e) =>
                      handleInputChange("risk_management_cyber_security", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("risk_management_cyber_security", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["risk_management_cyber_security"] || "NA"}</td>
              </tr>

              <tr>
                <td>Vendor Management Inventory</td>
                <td>
                  <input
                    value={inputValues.vendor_management_inventory}
                    onChange={(e) =>
                      handleInputChange("vendor_management_inventory", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("vendor_management_inventory", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["vendor_management_inventory"] || "NA"}</td>
              </tr>

              <tr>
                <td rowSpan="3">Flexibility</td>
                <td>Lead Times</td>
                <td>
                  <input
                    value={inputValues.lead_times}
                    onChange={(e) =>
                      handleInputChange("lead_times", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("lead_times", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["lead_times"] || "NA"}</td>
                
              </tr>

              <tr>
                <td>Reaction crisis</td>
                <td>
                  <input
                    value={inputValues.reaction_crisis}
                    onChange={(e) =>
                      handleInputChange("reaction_crisis", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("reaction_crisis", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["reaction_crisis"] || "NA"}</td>
              </tr>

              <tr>
                <td>Responsiveness to requests</td>
                <td>
                  <input
                    value={inputValues.responsiveness_rqst}
                    onChange={(e) =>
                      handleInputChange("responsiveness_rqst", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("responsiveness_rqst", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["responsiveness_rqst"] || "NA"}</td>
              </tr>

              <tr>
                <td rowSpan="3">Stability</td>
                <td>BCP</td>
                <td>
                  <input
                    value={inputValues.bcp}
                    onChange={(e) =>
                      handleInputChange("bcp", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("bcp", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["bcp"] || "NA"}</td>
                
              </tr>

              <tr>
                <td>Contract</td>
                <td>
                  <input
                    value={inputValues.contract}
                    onChange={(e) =>
                      handleInputChange("contract", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("contract", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["contract"] || "NA"}</td>
              </tr>

              <tr>
                <td>Financial Health</td>
                <td>
                  <input
                    value={inputValues.financial_health}
                    onChange={(e) =>
                      handleInputChange("financial_health", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("financial_health", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["financial_health"] || "NA"}</td>
              </tr>

              <tr>
                <td>Specifics</td>
                <td>Key Account Manager Support</td>
                <td>
                  <input
                    value={inputValues.account_manager}
                    onChange={(e) =>
                      handleInputChange("account_manager", e.target.value)
                    }
                    className="form-control sm-Input"
                    readOnly 
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      handleEvaluationChange("account_manager", e.target.value)
                    }
                  >
                    {evaluationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{scores["account_manager"] || "NA"}</td>
              </tr>










              {/* Total Row */}
              <tr>
                <td colSpan="4" className="text-end">
                  <strong>Total Score:</strong>
                </td>
                <td>
                  <strong>{totalScore.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
