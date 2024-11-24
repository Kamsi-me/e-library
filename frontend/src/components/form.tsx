"use client";

import React from 'react'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import '../styles/form.css'
import LoadingIndicator from './loadingIndicator';

interface FormProps {
  route: string,
  method: "Login" | "Register"
}

export default function Form({route, method}: FormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()

  const name = method === 'Login' ? "Login" : "Register";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault()

    try {
      const res = await api.post(route, { username, password }); 
      if (method === "Login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access)
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
        navigate("/")
      } else {
        navigate("/login")
      }
    } catch (error: unknown) {
      alert(error)
    } finally {
      setLoading(false);
    }
  }


  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input 
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <input 
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Username"
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  )
}
