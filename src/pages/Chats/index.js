import React, { useEffect, useState } from "react";
import { Container, Conversations, Separator } from "./styles";

import api from "../../services/api";
import { format, parseISO } from "date-fns";
import Conversation from "../../components/Conversation";

export default function Chats() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get("/", {
          params: { results: 20, nat: "br" }
        });

        const conversations = response.data.results.map(conversation => ({
          id: conversation.login.uuid,
          name: `${conversation.name.first} ${conversation.name.last}`,
          picture: conversation.picture.large,
          lastMessage: `Olá, meu nome é ${conversation.name.first}.`,
          timestamp: format(parseISO(conversation.registered.date), "kk:mm")
        }));
        console.log(conversations);
        setConversations(conversations);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Container>
      <Conversations
        data={conversations}
        renderItem={({ item }) => <Conversation {...item} />}
        keyExtractor={item => item.id}
        extraData={conversations}
      />
    </Container>
  );
}
