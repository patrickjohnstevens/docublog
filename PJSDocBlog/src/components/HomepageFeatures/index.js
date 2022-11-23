import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn In Public",
    link: "/about/learn-in-public",
    Svg: require("@site/static/img/undraw_programming.svg").default,
    description: (
      <>
        <p>
          “You share what you learn, as you learn it. You Open Source your
          knowledge. You build a public record of your interests and progress,
          and along the way, you attract a community of mentors, peers, and
          supporters. They will help you learn faster than you ever could on
          your own. Your network could be vast, consisting of experts in every
          field, unconstrained by your org chart.” -{" "}
          <a href="https://twitter.com/swyx" target="_blank">
            @swyx
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Create In Public",
    link: "/about/create-in-public",
    Svg: require("@site/static/img/undraw_maker_launch.svg").default,
    description: (
      <>
        Learning in needs to be synonymous with creating in public. Creating
        valuable things based on what you are learning is a wonderfuly{" "}
        <b>fun</b>
        <i>tastic</i> way to grow in life while adding value and serving others.
        On this adventure it is very important to balance our learning and
        consumption with creating and giving. <p></p>
        <p>
          <b>"This is way"</b> as Mando would say.
        </p>
      </>
    ),
  },
  {
    title: "Teach In Public",
    link: "/about/teach-in-public",
    Svg: require("@site/static/img/undraw_youtube_tutorial.svg").default,
    description: (
      <>
        We won't truly understand what we learn until we can teach it to someone
        else. Einstein said, "If you can't explain it simply, you don't
        understand it well enough." <p></p>
        <p>
          Learning gives you the knowledge and creating gives you the experience
          but it's teaching gives you the understanding and wisdom.
        </p>
      </>
    ),
  },
];

function Feature({ Svg, link, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
        </a>
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
