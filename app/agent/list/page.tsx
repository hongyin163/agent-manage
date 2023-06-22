"use client";
import React, { useState } from "react";
import withSession from "@/components/with-session";
import AgentList from "@/components/agent-list";
import { Button } from "@/components/ui/button";
import useAgentList from "@/hooks/useAgentList";
import AgentForm from "@/components/agent-form";
import AgentFormEdit from "@/components/agent-form-edit";
import { useToast } from "@/components/ui/use-toast";

import { Agent } from "@/types/agent";

function List(props: any) {
  const { toast } = useToast();

  const { list, add, remove, edit } = useAgentList();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editValue, setEditValue] = useState({});
  const onCreate = () => {
    setOpenAdd(true);
  };
  const onAddOpenChange = () => {
    setOpenAdd(false);
  };
  const onEditOpenChange = () => {
    setOpenEdit(false);
  };
  const onAddSubmit = (value: any) => {
    const val = {
      ...value,
      status: "developing",
      id: Date.now(),
    };
    add(val);
    setOpenAdd(false);
    toast({
      description: `Create agent ${value.name} successfully!`,
    });
  };
  const onAgentRemove = (id: string) => {
    remove(id);
  };
  const onAgentEdit = (value: Agent) => {
    setEditValue(value);
    setOpenEdit(true);
  };
  const onEditSubmit = (value: Agent) => {
    edit(value.id, value);
    setOpenEdit(false);
    toast({
      description: `Update agent ${value.name} successfully!`,
    });
  };
  return (
    <div className="flex flex-col">
      {openAdd && (
        <AgentForm
          title="Create Agent"
          value={undefined}
          open={openAdd}
          onSubmit={onAddSubmit}
          onOpenChange={onAddOpenChange}
        />
      )}
      {openEdit && (
        <AgentFormEdit
          title="Edit Agent"
          value={editValue}
          open={openEdit}
          onSubmit={onEditSubmit}
          onOpenChange={onEditOpenChange}
        />
      )}
      <div className=" text-right px-5">
        <Button variant={"outline"} onClick={onCreate}>
          Create Agent
        </Button>
      </div>
      <AgentList list={list} onRemove={onAgentRemove} onEdit={onAgentEdit} />
    </div>
  );
}

export default List;
