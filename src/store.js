import { reactive } from "vue";

export const store = reactive ({
    CharacterList: [],
    apiURL: "https://www.rickandmortyapi.com/api/character",
    titolo: "Rick And Morty App",
});