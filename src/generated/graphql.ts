/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  youtubeVideoSummary: YoutubeVideoSummary;
};


export type QueryYoutubeVideoSummaryArgs = {
  videoId: Scalars['String']['input'];
};

export type Video = {
  __typename?: 'Video';
  captions: Array<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type YoutubeVideoSummary = {
  __typename?: 'YoutubeVideoSummary';
  aiSummary: Scalars['String']['output'];
  video: Video;
};

export type YoutubeVideoSummaryQueryVariables = Exact<{
  videoId: Scalars['String']['input'];
}>;


export type YoutubeVideoSummaryQuery = { __typename?: 'Query', youtubeVideoSummary: { __typename?: 'YoutubeVideoSummary', aiSummary: string, video: { __typename?: 'Video', captions: Array<string>, title?: string | null, thumbnailUrl?: string | null } } };


export const YoutubeVideoSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"YoutubeVideoSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"youtubeVideoSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"videoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"captions"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aiSummary"}}]}}]}}]} as unknown as DocumentNode<YoutubeVideoSummaryQuery, YoutubeVideoSummaryQueryVariables>;