import React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {Button, StyleSheet, View} from 'react-native';
import {TodoService} from '../services/todo.services';
import {validationsSchemaCreateTodo} from '../utils/validation';
import CustomInput from '../components/CustomInput';
import {
  APP_CONTAINER,
  APP_FORM_CONTAINER,
  BUTTON_COLOR_CONFIRM,
  BUTTON_WRAPPER,
} from '../utils/consts';

const UpdateTodo = ({navigation, route}: {navigation: any; route: any}) => {
  const {id, item} = route.params;

  const todoList = () => {
    navigation.navigate('TodoList');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          _id: id,
          title: item.title,
          description: item.description,
          year: item.year,
          isCompleted: item.isCompleted,
          isPrivate: item.isPrivate,
        }}
        validationSchema={validationsSchemaCreateTodo}
        onSubmit={(values) => {
          const userPromis = new TodoService();
          const res = userPromis.updateTodo(values);
          res
            .then((res) => console.log(res.data, 'Todo successfully updated'))
            .catch((error) => console.log(`Something went wrong: ${error}`));
          todoList();
        }}
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
          <Form>
            <View style={styles.formContainer}>
              <CustomInput
                type={`text`}
                name={`title`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                touched={touched.title}
                errors={errors.title}
              />
              <CustomInput
                type={`textarea`}
                name={`description`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                touched={touched.description}
                errors={errors.description}
              />
              <CustomInput
                type={`text`}
                name={`year`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.year}
                touched={touched.year}
                errors={errors.year}
              />
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="isCompleted" />
                  Completed
                </label>
                <label>
                  <Field type="checkbox" name="isPrivate" />
                  Private
                </label>
              </div>
              <div style={BUTTON_WRAPPER}>
                <Button
                  disabled={!isValid || !dirty}
                  title="Update"
                  color={BUTTON_COLOR_CONFIRM}
                  onPress={() => handleSubmit()}
                />
              </div>
            </View>
          </Form>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: APP_CONTAINER,
  formContainer: APP_FORM_CONTAINER,
});

export default UpdateTodo;
