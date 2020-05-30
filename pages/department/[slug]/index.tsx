import React from "react";
import { useRouter } from "next/router";
import Department from "../../../components/Department";
// import { NextPage } from "next";

const SingleDepartmentPage = (props) => {
  const router = useRouter();
  // const { slug } = router.query;
  // console.log(router);
  // console.log(slug);
  // console.log(props);
  return <Department />;
};

SingleDepartmentPage.getInitialProps = async ({ req }) => {
  console.log(req);
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default SingleDepartmentPage;
