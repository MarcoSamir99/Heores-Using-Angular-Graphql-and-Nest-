import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type HeroQl = {
  __typename?: 'HeroQl';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHero: HeroQl;
  removeHero: Scalars['Boolean'];
};


export type MutationAddHeroArgs = {
  newHeroData: NewHeroInput;
};


export type MutationRemoveHeroArgs = {
  id: Scalars['Float'];
};

export type NewHeroInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hero: HeroQl;
  heroes: Array<HeroQl>;
  suggestedHeroes: Array<HeroQl>;
};


export type QueryHeroArgs = {
  id: Scalars['Float'];
};


export type QuerySuggestedHeroesArgs = {
  key: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  heroAdded: HeroQl;
};

export type HeroesQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroesQuery = { __typename?: 'Query', heroes: Array<{ __typename?: 'HeroQl', name: string, id: number }> };

export type HeroQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type HeroQuery = { __typename?: 'Query', hero: { __typename?: 'HeroQl', name: string, id: number } };

export type SuggestedHeroesQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type SuggestedHeroesQuery = { __typename?: 'Query', suggestedHeroes: Array<{ __typename?: 'HeroQl', name: string, id: number }> };

export const HeroesDocument = gql`
    query heroes {
  heroes {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HeroesGQL extends Apollo.Query<HeroesQuery, HeroesQueryVariables> {
    override document = HeroesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const HeroDocument = gql`
    query hero($id: Float!) {
  hero(id: $id) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HeroGQL extends Apollo.Query<HeroQuery, HeroQueryVariables> {
    override document = HeroDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestedHeroesDocument = gql`
    query suggestedHeroes($key: String!) {
  suggestedHeroes(key: $key) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestedHeroesGQL extends Apollo.Query<SuggestedHeroesQuery, SuggestedHeroesQueryVariables> {
    override document = SuggestedHeroesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }