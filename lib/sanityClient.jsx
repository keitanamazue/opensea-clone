import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'x9fhprbg',
  dataset: 'production',
  apiVersion: '2022-02-02',
  token:
    'skXfvbJYV5SLqqAWoAR9QUApfd9eRQEvPKiwG4h0ASiw8aodNlRbrzShvJECZsHU2WJzjTy9ahjHC3yuKlOlz1aXqzJHIzT8fOyGhyMnTGRroJKhkcL6kBHs0Iix5VtJVMk4I4tsqu1fgvygtmELpXu1hbkjdv9MdKMTnqld4FRXutOWIB01',
  useCdn: false,
})
