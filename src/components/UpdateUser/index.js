import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../PageWrapper';
import UpdateUserForm from '../Form/UpdateUserForm';
import Content from '../Content';

const UpdateUser = () => {
  return (
    <PageWrapper
      modifierCLasses='page-wrapper--small update'
    >
      <Link className="cancel" to='/chat'>Cancel</Link>
      <Content
        subtitle="Update your profile."
      >
        <p>Update your user information or delete your account.</p>
        <UpdateUserForm />
      </Content>
    </PageWrapper>
  );
}

export default UpdateUser;