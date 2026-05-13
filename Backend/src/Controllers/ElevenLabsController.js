import express from "express"
import ElevenLabsService from "../Services/ElevenLabsService"

class ElevenLabsController{
    constructor(){
        this.ElevenLabsService=ElevenLabsService;
    }
}