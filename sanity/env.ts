export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'MEXT_PUBLIC_SANITY_TOKEN'
)


// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }
function assertValue<T>(v: T | undefined, variableName: string): T {
  if (v === undefined) {
    throw new Error(`Missing environment variable: ${variableName}`);
  }
  return v;
}
