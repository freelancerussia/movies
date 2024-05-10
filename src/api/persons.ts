import { AxiosInstance } from 'axios'
export const personsApi = (instance: AxiosInstance) => ({

  async getPersons(filter:GetPersonsFilter):Promise<GetPersonsRes>{
    const { data } = await instance.get('person', { params: filter })
    return data
  },
   
    async getPersonsByName(filters:PersonsByName):Promise<GetPersonsRes>{
        const { data } = await instance.get('person/search', { params: filters })
        return data
    },
    async getPersonsById(id:number):Promise<Person>{
        const { data } = await instance.get(`person/${id}`)
        return data
    },
    async getPersonAwards(filters:GetAwardsFilter):Promise<GetAwardsRes>{
        const { data } = await instance.get(`person/awards`,{params:filters})
        return data
    },
})

export type PersonsByName = {
    page:number
    limit:number
    query?: string
}
export type GetPersonsFilter = {
  page:number
  limit:number
  sortField?:string
  sortType?: '-1' | '1'
  notNullFields?:string
  countAwards?:string
  'profession.value'?:string
}

type GetAwardsFilter = {
  page: number
  limit: number
  personId?:string | null
  sortField?:string
  sortType?: '-1' | '1'
}

export type Person = {
    id: number
      name: string
      enName: string
      photo: string
      sex?: string
      growth?: number
      birthday?: string
      death?: string
      age?: number
      movies?: 
    {
      id: number,
      name: string,
      alternativeName: string,
      rating: number,
      general: boolean,
      description: string,
      enProfession: string
    }[]
  
   profession:  {
      value: string
    }[] | string
  description:string
  countAwards?:number
   birthPlace?: 
    {
      value: string
    }[]
  ,
  deathPlace?: [
    {
      value: string
    }[]
  ],
  facts?:{
    value:string
  }[]
}

export type AwardType =  {
  id:string
      nomination: {
        award: {
          title: string,
          year: number
        },
        title: string
      },
      winning: boolean,
      updatedAt: string,
      createdAt: string,
      personId: number,
      movie: {
        id: number,
        name: string,
        rating: number
      }
    }

type GetPersonsRes = {
    docs: Person[]
    limit: number
    page: number
    pages: number
    total: number
}


type GetAwardsRes = {
  docs: AwardType[]
    limit: number
    page: number
    pages: number
    total: number
}
