import React, { useState } from 'react'
import { Agent } from '../types/agent'

const data: Agent[] = new Array(10).fill(0).map((k, i) => {
    return {
        id: i,
        name: 'Test Agent ' + i,
        description: "Agent description" + i,
        status: 'developing'
    };
}) as unknown as Agent[];

export default function useAgentList() {
    const [list, setList] = useState<Agent[]>(data)
    const add = (agent: Agent) => {
        setList(list.concat(agent))
    }
    const remove = (id: string) => {
        setList(list.filter(p => p.id != id))
    }
    const edit = (id: string, agent: Agent) => {
        const index = list.findIndex(p => p.id === id);
        list[index] = agent;
        setList([...list])
    }
    return {
        list,
        add,
        remove,
        edit
    }
}
