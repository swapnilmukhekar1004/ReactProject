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
    lead_times: 12,
    reaction_in_crisis: 8,
    responsiveness_of_request: 5,
    bcp: 14,
    financial_stability: 11,
    contract: 8,
    key_account_manager_support: 14,
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

  return (
    <>
      <div className="Outlet-Main">
        <div>
          <Header />
        </div>

        <div className="custom-container">
          <table className="table table-bordered" style={{ marginTop: "80px" }}>
            <tbody>
              {/* top row with rowspan */}
              <tr>
                <td rowSpan="2"></td>
                <th colSpan="4" className="text-center">
                  H1-2024
                </th>
              </tr>
              <tr>
                <td>Rated Criteria</td>
                <td>Ratio(%) 100%</td>
                <td>Evalution</td>
                <td>Score</td>
              </tr>

              {/* First row with rowspan */}
              <tr>
                <td rowSpan="7">Competetiveness</td>
                <td>Price Competetiveness on tenders</td>
                <td>
                  <input
                    value={inputValues.price_competitiveness}
                    onChange={(e) =>
                      handleInputChange("price_competitiveness", e.target.value)
                    }
                    className="form-control sm-Input"
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
                    onChange={(e) => handleInputChange("payment_term", e.target.value)}
                    className="form-control sm-Input"
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) => handleEvaluationChange("payment_term", e.target.value)}
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
                    onChange={(e) => handleInputChange("innovative_trends_info", e.target.value)}
                    className="form-control sm-Input"
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) => handleEvaluationChange("innovative_trends_info", e.target.value)}
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
                <td>Risk Management Cyber secuirty</td>
                <td>
                  <input
                    value={inputValues.risk_management_cyber_security}
                    onChange={(e) => handleInputChange("risk_management_cyber_security", e.target.value)}
                    className="form-control sm-Input"
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) => handleEvaluationChange("risk_management_cyber_security", e.target.value)}
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
                    onChange={(e) => handleInputChange("vendor_management_inventory", e.target.value)}
                    className="form-control sm-Input"
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    onChange={(e) => handleEvaluationChange("vendor_management_inventory", e.target.value)}
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

              

         
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
