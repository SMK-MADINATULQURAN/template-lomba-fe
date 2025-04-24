"use client"
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

export const loginValiasi = yup.object().shape({
  name: yup.string().nullable().required("wajib"),
});

function Login() {
  const formik = useFormik({
    initialValues: { name: "", alamat: "" },
    enableReinitialize: true,
    validationSchema: loginValiasi,
    onSubmit: () => {
      console.log("ok");
    },
  });

  console.log("formik", formik.values);
  console.log("err", formik.errors)

  return (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <input
          
          name="name"
          onBlur={formik.handleBlur}
          className="border"
          placeholder="isi"
            value={formik.values.name}
            onChange={(e: any) => {
              formik.setFieldValue("name", e.target.value);
              formik.setFieldValue("alamat", e.target.value);
            }}
          />


         <p> {formik.errors.name}</p>
        </form>
      </FormikProvider>
    </>
  );
}

export default Login;
