import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// firestore

import { db } from "../firebaseApp";
import { collection, getDocs } from "firebase/firestore";

//

import type { programCardType } from "../types/types";

type Fetch = {
  id: any,
  data: programCardType
}



export const fetchGetCard = createAsyncThunk<any, undefined>(
  'card/fetchGetCard',
  async () => {

    const querySnapshot = await getDocs(collection(db, 'program-card'))
    const data = querySnapshot.docs.map((item) => ({id: item.id, data: item.data()}))

    return data

  }

)

type cardState ={
  cards: Fetch[]
}


const programCardSlice = createSlice({

  name: 'card',
  initialState: {
    cards: []
  } as cardState ,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCard.fulfilled, (state, action) => {
      state.cards = action.payload
    })
  }

})

export default programCardSlice.reducer