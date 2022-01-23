import React from 'react';
import {Formik} from 'formik';
import {StyleSheet, View, Button} from 'react-native';
import {UserService} from '../services/user.services';
import {validationsSchemaReg} from '../utils/validation';
import CustomInput from '../components/CustomInput';
import {
  APP_CONTAINER,
  APP_FORM_CONTAINER,
  BUTTON_COLOR_CONFIRM,
  BUTTON_WRAPPER,
} from '../utils/consts';

const Registration = ({navigation}: {navigation: any}) => {
  const todoList = () => {
    navigation.navigate('TodoList');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          const userPromis = new UserService();
          const res = userPromis.createUser(values);
          res
            .then((res) =>
              console.log(res.data, 'User successfully registered')
            )
            .catch((error) => console.log(`Something went wrong: ${error}`));
          todoList();
        }}
        validationSchema={validationsSchemaReg}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <View style={styles.formContainer}>
            <CustomInput
              type={`email`}
              name={`email`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              touched={touched.email}
              errors={errors.email}
            />
            <CustomInput
              type={`password`}
              name={`password`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              touched={touched.password}
              errors={errors.password}
            />
            <CustomInput
              type={`password`}
              name={`confirmPassword`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
            />
            <div style={BUTTON_WRAPPER}>
              <Button
                disabled={!isValid || !dirty}
                title="Submit"
                color={BUTTON_COLOR_CONFIRM}
                onPress={() => handleSubmit()}
              />
            </div>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: APP_CONTAINER,
  formContainer: APP_FORM_CONTAINER,
});

export default Registration;
