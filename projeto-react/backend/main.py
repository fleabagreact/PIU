from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Tarefa(BaseModel):
    texto: str
    feita: bool

@app.post("/tarefas")
def receber_tarefas(tarefas: List[Tarefa]):
    print("Tarefas recebidas:")
    for tarefa in tarefas:
        print(f"- {tarefa.texto} | concluída: {tarefa.feita}")
    return {"mensagem": "Tarefas recebidas com sucesso!"}
