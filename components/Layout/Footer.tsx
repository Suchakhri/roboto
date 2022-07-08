import React, { ReactElement } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description?: string;
};

export default function Footer({ title, description }: Props): ReactElement {
  return (
    <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
}
