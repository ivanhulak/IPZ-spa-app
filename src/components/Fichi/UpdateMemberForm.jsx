import React from 'react';
import { Field, Formik } from "formik";
import { useSelector } from 'react-redux';

const UpdateMembersForm = ({ memberId, updateMember }) => {
   const memberExample = useSelector((state) => state.membersPage.memberExample)

   const submit = (values, { setSubmitting }) => {
      const memberExample = {
         name: values.name,
         surname: values.surname,
         age: values.age,
         hobby: values.hobby,
         aboutMe: values.aboutMe,
         photo: values.photo,
         location: {
            state: values.location.state,
            city: values.location.city
         }, socials: {
            facebook: values.socials.facebook,
            instagram: values.socials.instagram,
            gitHub: values.socials.gitHub,
         }
      }
      updateMember(memberId, memberExample)
      setSubmitting(false);
   }


   return <Formik enableReinitialize={true}
      initialValues={{
         name: memberExample.name,
         surname: memberExample.surname,
         age: memberExample.age,
         hobby: memberExample.hobby,
         aboutMe: memberExample.aboutMe,
         photo: memberExample.photo,
         location: {
            state: memberExample.location.state,
            city: memberExample.location.city
         }, socials: {
            facebook: memberExample.socials.facebook,
            instagram: memberExample.socials.instagram,
            gitHub: memberExample.socials.gitHub,
         }
      }}
      onSubmit={submit}>

      {({ handleSubmit, isSubmitting, }) => (
         <form onSubmit={handleSubmit}>
            <h3>Оновити дані учасника</h3>
            <div>Name:<Field type="text" name="name" /></div>
            <div>Surname:<Field type="text" name="surname" /></div>
            <div>Age:<Field type="number" name="age" /></div>
            <div>Hobby:<Field type="text" name="hobby" /></div>
            <div>About me:<Field type="text" name="aboutMe" /></div>
            <div>Photo:<Field type="text" name="photo" /></div>
            <div>State:<Field type="text" name="location.state" /></div>
            <div>City:<Field type="text" name="location.city" /></div>
            <div>Facebook:<Field type="text" name="socials.facebook" /></div>
            <div>Github:<Field type="text" name="socials.gitHub" /></div>
            <div>Instagram:<Field type="text" name="socials.instagram" /></div>
            <button type="submit" disabled={isSubmitting}>Оновити дані учасника</button>
         </form>
      )}
   </Formik>
}

export default UpdateMembersForm;