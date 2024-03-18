import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit"; // Assuming useSubmit hook handles form submission
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      // Assuming submit function sends a POST request to backend service
      submit(values);
      resetForm();
    },
  });

  return (
      <FullScreenSection
          isDarkBackground
          backgroundColor="#512DA8"
          py={16}
          spacing={8}
      >
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section" alignSelf="center">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                      id="firstName"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                      id="comment"
                      name="comment"
                      height={250}
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
  );
};

export default LandingSection;