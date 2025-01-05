import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,  token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn:false,
  token,
  ignoreBrowserTokenWarning: true
})
