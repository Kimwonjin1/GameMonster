import { Schema, model } from 'mongoose'

export interface Game { 
    address: string;
    numberOfPeople: string;
    data : Date;
    time : string;
}

const GameSchema = new Schema<Game>({
    
})