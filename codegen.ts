import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: "http://localhost:4444/graphql",
  documents: ['src/**/*.graphql'],
  generates: {
    './src/generated/': {
      preset: "client",
    }
  }
}

export default config
