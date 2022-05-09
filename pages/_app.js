//모든 페이지에서 공통되는 것들 처리
import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import propTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default NodeBird;
