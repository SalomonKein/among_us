import React from 'react';
import {Formik} from 'formik';
import {StyleSheet, View, Button} from 'react-native';
import {validationsSchemaAuth} from '../utils/validation';
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
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
          todoList();
        }}
        validationSchema={validationsSchemaAuth}
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
