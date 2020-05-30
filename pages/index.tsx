import { Department, DepartmentsArray } from "../types/Department";
import { GetStaticProps } from "next";
import faker from "faker";
import List from "../components/List";
import React from "react";

const IndexPage: React.FC<DepartmentsArray> = ({ departments }) => {
  return (
    <>
      <List departments={departments} />
    </>
  );
};

let departments: Array<Department> = [];

// When should I use getStaticProps? You should use getStaticProps if:
// The data required to render the page is available at build time ahead of a user’s request.
// The data comes from headless CMS.
// The data can be publicly cached (not user-specific).
// The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async () => {
  const departmentsHasData = departments.length !== 0;

  // Comment out the following line to refresh data on each page refresh
  if (departmentsHasData) return { props: { departments } };

  for (let i = 0; i < 50; i += 1) {
    const agencyAbbr: string = await faker.hacker.abbreviation();
    const city: string = await faker.address.city();
    const county: string = await faker.address.county();
    const excerpt: string = await faker.lorem.sentence();
    const name: string = await faker.company.companyName();
    const nameSanitize: string = name
      .replace(/([^a-zA-Z\s][- ])*/g, "")
      .toLocaleLowerCase();
    const nameSlugify = nameSanitize.replace(/\s\t*/g, "-");
    const state: string = await faker.address.state();
    const stateAbbr: string = await faker.address.stateAbbr();

    departments = [
      ...departments,
      {
        agencyAbbr,
        city,
        county,
        excerpt,
        id: i,
        name,
        slug: nameSlugify,
        state,
        stateAbbr,
      },
    ];
  }

  return {
    props: {
      departments,
    },
  };
};

export default IndexPage;
