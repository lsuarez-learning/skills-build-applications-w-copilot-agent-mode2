import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourcePage({ resource, title, description, columns, emptyMessage }) {
  const [records, setRecords] = useState([])
  const [state, setState] = useState({ status: 'loading', message: '' })

  useEffect(() => {
    let active = true
    fetchCollection(resource)
      .then((data) => {
        if (active) {
          setRecords(data)
          setState({ status: 'ready', message: '' })
        }
      })
      .catch((error) => {
        if (active) setState({ status: 'error', message: error.message })
      })
    return () => { active = false }
  }, [resource])

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live from OctoFit API</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        <span className={`status-pill status-${state.status}`}>
          {state.status === 'loading' ? 'Loading' : state.status === 'error' ? 'Offline' : `${records.length} records`}
        </span>
      </div>

      {state.status === 'loading' && <div className="loading-state">Loading {resource}...</div>}
      {state.status === 'error' && <div className="error-state">{state.message}. Check that the backend is running on port 8000.</div>}
      {state.status === 'ready' && records.length === 0 && <div className="empty-state">{emptyMessage}</div>}
      {state.status === 'ready' && records.length > 0 && (
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr>{columns.map((column) => <th key={column.label}>{column.label}</th>)}</tr></thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id ?? record.id ?? index}>
                  {columns.map((column) => <td key={column.label}>{column.render(record) || '-'}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
