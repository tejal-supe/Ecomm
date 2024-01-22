import React, { useState } from "react";

interface FormData {
  data: {
    name: string;
    placeholder: string;
    type: string;
    label: string;
    validationRules: {
      validationRegex: string;
      validationMessage: string;
    };
  }[];
  submitData: (data: Record<string, any>) => any;
}

type FormState = Record<string, any>;

const   FormFields = (props: FormData) => {
  const [formData, setFormData] = useState<FormState>({});
  const [errors, setErrors] = useState<FormState>({});

  const handleData = (
    e: React.ChangeEvent<HTMLInputElement>,
    validate: FormState
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); 
    handleValidation(validate, e.target.name, e.target.value);
  };

  const handleValidation = (
    validate: FormState,
    name: string,
    value: string
  ) => {
    if (!new RegExp(validate.validationRegex).test(value) && value.length > 1) {
      setErrors({ ...errors, [name]: validate.validationMessage });
    } else {
      delete errors[name];
    }
  };

  const isObjectEmpty = (obj: FormState) => {
    console.log("in", Object.keys(obj));
    return Object.keys(obj).length !== 0;
  };
  const submitDataToParent = () => {
    console.log(errors, "errors");
    if (isObjectEmpty(errors)) {
      alert("Please fill the form");
    } else {      
      props.submitData(formData);
    }
  };

  return (
    <>
      {props?.data.map((formfields) => {
        return (
            <div className="container mb-4" key={formfields.name}>
            <label className="block text-left" htmlFor={formfields.name}>
              {formfields.label}
            </label>
            <input
              type={formfields.type}
              name={formfields.name}
              id={formfields.name}
              placeholder={formfields.placeholder}
              className={
               ` w-full sm:w-[90%] md:w-[90%] lg:w-[90%] h-9 px-3 rounded-lg ${!errors[formfields.name]
                  ? "border  focus:border-blue-400 caret-blue-600 focus-visible:outline-blue-600"
                  : "border-2 border-red-700focus:border-red-700 caret-red-700 focus-visible:outline-red-700"}`
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleData(e, formfields.validationRules)
              }
            />
            <p className="text-red-600">
              {errors[formfields.name] ? errors[formfields.name] : ""}
            </p>
          </div>
        );
      })}
      <div className="flex justify-center">
      <button type="button" className="flex text-center w-full sm:w-32 h-8  border-2 sm:justify-center border-green-200 rounded-3xl bg-green-200 text-green-600 hover:border-green-300 hover:bg-green-300 hover:text-green-600 shadow-sm " onClick={() => submitDataToParent()}>Submit</button>
      </div>
    </>
  );
};

export default FormFields;
