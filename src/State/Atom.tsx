import React from "react";
import {atom} from "recoil";
import {IEvento} from "../interfaces/IEvento";
import {IFiltroDeEventos} from "../interfaces/IFiltroDeEventos";
import {eventosAsync} from "./eventosFiltradosState";

export const listaDeEveventosState = atom<IEvento[]>({
    key: 'listaDeEveventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})