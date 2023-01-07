import { createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'


export const IssueContext = createContext({
  issues: [],
  url: ''
})

const IssueProvider = ({ children, url }) => {
  // State
  const [issues, setIssues] = useState([])

  const fetchIssues = useCallback(async () => {
    const response = await axios(url)

    if (response) {
      setIssues(response.data)
    }
  }, [url])

  // Effects
  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const context = {
    issues,
    url
  }

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
}

export default IssueProvider