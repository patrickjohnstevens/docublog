import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn In Public",
    Svg: require("@site/static/img/undraw_developer_activity.svg").default,
    description: (
      <>
        Learn In Public more specifically. This website was inspired by the
        ideas of Learn In Public made popular by{" "}
        <a href="https://twitter.com/swyx" target="_blank">
          @swyx
        </a>{" "}
        and many of the awesome developers and teachers across the world who
        learn, create, teach, and publish content for others to learn and grow
        from.
      </>
    ),
  },
  {
    title: "Create and Innovate",
    Svg: require("@site/static/img/undraw_programming.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Teach and Reach",
    Svg: require("@site/static/img/undraw_youtube_tutorial.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
