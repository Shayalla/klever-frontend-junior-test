import React from 'react';
import { useParams } from 'react-router';
import FormEditToken from '../../components/formEditToken/FormEditToken';
import Header from '../../components/header/Header';
import './EditToken.css';

function EditToken() {
  const { token } = useParams();

  return (
    <>
      <Header />
      <FormEditToken token={ token } />
    </>
  );
};

export default EditToken;