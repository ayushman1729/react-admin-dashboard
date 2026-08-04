import React from "react";

function QuoteTable({ quotes }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Quotes List
        </h6>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Quote</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td>{quote.id}</td>
                  <td>{quote.quote}</td>
                  <td>{quote.author}</td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default QuoteTable;