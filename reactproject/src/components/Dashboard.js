import React, { useState } from "react";
import {
  Card,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Accordion,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import TheNavbar from "./Navbar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import YouTube from "react-youtube";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const Chart = () => {
    const data = {
      labels: ["Overweight", "Obese", "Healthy", "Underweight"],
      datasets: [
        {
          label: "My First Dataset",
          data: [34000000, 17000000, 2920000, 1080000],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(000, 000, 000)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    return (
      <Pie
        data={data}
        width={800}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    );
  };

  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <div className="w-100 text-center mt-2">
        <h2>Fitness and Health Web Application</h2>
      </div>
      <Container fluid>
        <Row className="text-center">
          <p>
            Fitness and Health Web Application aims to help you to achieve your
            fitness and health goals, which could be improving your body
            composition (e.g. losing fat and/or increasing muscle mass), or
            having the objective of achieving a healthy lifestyle, by
            maintaining a healthy weight.
          </p>
          <p>
            The primary use case of this application is focussed on making
            weight loss simpler for individuals who may be obese or overweight.
            Primary research prior to development has informed the
            functionalities of this application, by evaluating the overall
            consensus of the responses that were received. As a result, this
            application has been created with the appropriate tools, necessary
            to aid users in their health and fitness journey!
          </p>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="Modern Day Epidemic"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Modern Day Epidemic" title="Modern Day Epidemic">
              <Col className="text-center">
                <h4>Modern Day Epidemic</h4>
                <p>
                  According to worldpopulationreview (2021), there are 53.9
                  million people, in the UK that are over the age of 18. Using
                  the findings from FormulateHealth (2021), this roughly
                  estimate that there are ~34 million adults that are classed as
                  overweight, with ~17 million of these overweight individuals
                  being obese. These figures are extremely high and suggests
                  that obesity is an epidemic, in the UK.
                </p>
                <p>
                  Obesity can increase the risk of developing many serious
                  health conditions such as Type 2 diabetes, High blood
                  pressure, High cholesterol (which can lead to coronary heart
                  disease and stroke), Asthma, Several types of cancer (e.g.
                  bowel cancer, breast cancer, womb cancer), Liver Disease and
                  Kidney Disease (NHS, 2019).
                </p>

                <h5>BMI Classifications amongst UK Adult Population</h5>

                <div>
                  <Chart />
                </div>
              </Col>
            </Tab>
            <Tab eventKey="Solution To Epidemic" title="Solution To Epidemic">
              <Col className="text-center">
                <h4>How can this epidemic be solved?</h4>

                <p>
                  The underlying cause of this epidemic is rather simple to
                  understand, as it is all comes down to calories in VS calories
                  out. Food and drink contain energy, which is measured in units
                  called calories (NHS, 2019). Calories are needed for the human
                  body to perform basic bodily functions, digestion, and
                  physical activity.
                </p>

                <p>
                  {" "}
                  In the case of an obese or overweight individual, they are
                  consuming excess calories, that their body does not need to
                  perform the basic bodily functions previously mentioned. As a
                  result, the excess calories are stored as fat, which causes
                  weight gain.
                </p>
                <p>
                  For an individual to lose weight, they need to calculate how
                  many calories they need to consume to maintain their weight,
                  which is known as maintenance calories. They can do this by
                  using the TDEE Calculator. If they consume the cutting
                  calories suggested by the calculator, their body will tap into
                  stores of energy in the body such as fat or lean body mass to
                  make up for the deficit. Therefore, allowing the individual to
                  lose weight safely.
                </p>
              </Col>
            </Tab>
          </Tabs>
        </Row>

        <Row>
          <Tabs
            defaultActiveKey="Recommendation"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Recommendation" title="Determining Fitness Goal">
              <Col className="text-center">
                <h4>How To Determine Your Fitness Goal</h4>
                <p>
                  To become a healthier individual, it is VITAL that you
                  understand what you must do to achieve your objective. The{" "}
                  <a href="/BMICalculator">BMI Calculator </a>
                  allows you to do this by intaking your height and weight and
                  displaying what your Body Mass Index is. If you fall into the
                  obese/overweight category, it is suggested that you enter a
                  WEIGHT LOSS/CUTTING phase until your weight has gone into the
                  healthy category within the BMI Calculator. If you fall into
                  the healthy category, it is suggested that you maintain your
                  current weight and improve your body composition by entering a
                  MAINTENANCE phase. If you fall into the underweight category
                  on the BMI Calculator. It is advised that you enter a WEIGHT
                  GAIN/BULKING phase until your weight is comfortably in the
                  healthy category within the BMI Calculator, which would be a
                  BMI ~22.0.
                </p>
              </Col>
            </Tab>

            <Tab eventKey="Guide to Fat loss" title="Cutting Guide">
              <Col className="text-center">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Setting Up The Diet</Accordion.Header>
                    <Accordion.Body>
                      <h4>Caloric Intake</h4>
                      <p>
                        The first step to ensure a successful cut is to
                        calculate your caloric intake. This can be done by using
                        the <a href="/TDEECalculator">TDEE Calculator</a>, by
                        entering your weight, height, age, activity level and
                        gender. Different calorie levels will be generated, but
                        the one to focus on would be the “Cutting Calories”, as
                        this would be a 500kcal deficit from your maintenance
                        calories, which will allow you to lose weight
                        successfully.
                      </p>
                      <p>
                        However, it is CRUCIAL that you are honest in regard to
                        your activity level since most people overestimate how
                        much they workout (i.e. they choose 'Heavy Exercise'
                        when they should choose 'Light Exercise), which results
                        in a very slow rate of weight loss or no weight loss at
                        all. You should use the TDEE calculator as a reasonable
                        estimate to start with and adjust your calories up or
                        down based on your weight change over time.{" "}
                      </p>
                      <h4>Protein Intake</h4>
                      <p>
                        It is also important to ensure that you consume enough
                        protein in order to maintain your current level of
                        muscle mass. As your body is prone to breaking down
                        muscle for energy when in a calorie deficit. To combat
                        this, you must consume a sufficient level of protein in
                        grams per day that is roughly 2x of your body weight in
                        kg (e.g. 80kg individual should consume 160g protein per
                        day).
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Training On A Cut </Accordion.Header>
                    <Accordion.Body>
                      <h4>Weight Training</h4>
                      <p>
                        It is VITAL to follow a weightlifting routine in order
                        to maintain and preserve muscle mass.
                        <a
                          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5946208/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          A research article
                        </a>
                        , by Sardeli et al, concluded that weightlifting
                        preserves roughly 93% of muscle mass in subjects that
                        were in a caloric deficit in order to lose weight. In
                        short, this is because weightlifting provides your body
                        with a stimulus that tells it that it needs to keep hold
                        of its muscle mass because the muscles are being used
                        intensely.
                      </p>

                      <h4>Weightlifting Training Routines</h4>
                      <p>
                        There are many different types of routines, but to keep
                        things simple, it is best to choose one of three
                        training splits such as Push/Pull/Legs, Upper/Lower or
                        Full Body. These are all good choices, but it comes down
                        to your lifestyle and how you can fit exercise around
                        your life. The objective of weight training is to
                        conserve muscle mass. However, you may also get stronger
                        over this period. Below are some examples of
                        weightlifting training routines that you can follow:
                      </p>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2020/03/PULL-WORKOUT-PDF-updated.pdf?__s=5ncp5ayzfntdgwew1hma"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Push/Pull/Legs Split (6x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.muscleandstrength.com/sites/default/files/workouts/upper_lower4day.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Upper/Lower Split (4x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2019/01/jeremyethier-FULL-BODY-WORKOUT-A-PDF-DL.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Full Body Split (3x per week)
                        </a>
                      </li>

                      <h4 className="mt-2">Cardio</h4>
                      <p>
                        It is not necessary to perform cardio on a cut. However,
                        if you feel that you have consumed too many calories and
                        need to burn some to stay in your calorie deficit.
                        Performing some low intensity cardio could be a great
                        option to do so, which could include exercises such as
                        walking or cycling at a comfortable pace. Machines such
                        as treadmills or exercise bikes can display how many
                        calories you have burned, so you should know when you
                        have done enough cardio to burn the excess calories you
                        have consumed.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Expert Advice </Accordion.Header>
                    <Accordion.Body>
                      <h4>The Smartest Way To Get Lean by Nippard et al.</h4>
                      <YouTube videoId="d8V9ZaSq9Oc" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Tab>

            <Tab
              eventKey="Guide to Weight Maintenance"
              title="Weight Maintenance Guide"
            >
              <Col className="text-center">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Setting Up The Diet</Accordion.Header>
                    <Accordion.Body>
                      <h4>Caloric Intake</h4>
                      <p>
                        The first step to undergo a successful maintenance
                        phase, is to calculate the amount of calories to
                        consume. This can be done by using the{" "}
                        <a href="/TDEECalculator">TDEE Calculator</a>, by
                        entering your weight, height, age, activity level and
                        gender. Different calorie levels will be generated, but
                        the one to focus on would be the "Maintenance Calories”,
                        as this would allow you to maintain your weight
                        successfully.
                      </p>
                      <p>
                        However, it is CRUCIAL that you are honest in regard to
                        your activity level since most people overestimate how
                        much they workout (i.e. they choose 'Heavy Exercise'
                        when they should choose 'Light Exercise), which could
                        result in them gaining weight, as a higher activity
                        level would result in a higher maintenance calories. You
                        should use the TDEE calculator as a reasonable estimate
                        to start with and adjust your calories up or down based
                        on your weight change over time.
                      </p>
                      <h4>Protein Intake</h4>
                      <p>
                        It is also important to ensure that you consume enough
                        protein in order to maintain and build muscle. It is
                        vital that you consume a sufficient level of protein in
                        grams per day, which is roughly 2x of your body weight
                        in kg (e.g. 80kg individual should consume 160g protein
                        per day).
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. Training On Maintenance Calories{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <h4>Weight Training</h4>
                      <p>
                        This type of training at a caloric maintenance allows an
                        individual to improve their body composition, whilst
                        maintaining their weight. For example, if an individuals
                        weights 80kg and has a caloric maintenance of 2900kcal,
                        it is very likely that they will consume roughly that
                        amount of calories, by possibly slightly under or over
                        eating, due to slight inaccuracies in calorie tracking.
                        This slight unintentional deviation leads to some days
                        of being at a caloric surplus or being at a caloric
                        deficit. Being at a deficit allows the body to burn fat
                        for fuel, thus decreasing body weight and making an
                        individual leaner and a surplus allows for a stimulus
                        for muscle growth under conditions that the muscles are
                        being stimulated for growth. Thus, allowing an
                        individual to achieve both gaining muscle and losing fat
                        simultaneously. In conclusion, this allows for
                        individuals to improve their body composition once they
                        have achieved a healthy and maintainable body weight.
                      </p>

                      <h4>Weightlifting Training Routines</h4>
                      <p>
                        There are many different types of routines, but to keep
                        things simple, it is best to choose one of three
                        training splits such as Push/Pull/Legs, Upper/Lower or
                        Full Body. These are all good choices, but it comes down
                        to your lifestyle and how you can fit exercise around
                        your life. Below are some examples of weightlifting
                        training routines that you can follow:
                      </p>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2020/03/PULL-WORKOUT-PDF-updated.pdf?__s=5ncp5ayzfntdgwew1hma"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Push/Pull/Legs Split (6x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.muscleandstrength.com/sites/default/files/workouts/upper_lower4day.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Upper/Lower Split (4x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2019/01/jeremyethier-FULL-BODY-WORKOUT-A-PDF-DL.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Full Body Split (3x per week)
                        </a>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Expert Advice </Accordion.Header>
                    <Accordion.Body>
                      <h4>
                        How To Build Muscle And Lose Fat At The Same Time: Step
                        By Step Explained by Nippard
                      </h4>
                      <YouTube videoId="M4K0s792wAU" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Tab>

            <Tab eventKey="Guide to Weight Gain" title="Bulking Guide">
              <Col className="text-center">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Setting Up The Diet</Accordion.Header>
                    <Accordion.Body>
                      <h4>Caloric Intake</h4>
                      <p>
                        The first step to undergo a successful bulking phase, is
                        to calculate the amount of calories to consume. This can
                        be done by using the{" "}
                        <a href="/TDEECalculator">TDEE Calculator</a>, by
                        entering your weight, height, age, activity level and
                        gender. Different calorie levels will be generated, but
                        the one to focus on would be the "Bulking Calories”, as
                        consuming at this calorie level would allow you to
                        increase your weight and muscle mass, which is the
                        objective of a bulk.
                      </p>
                      <p>
                        However, it is CRUCIAL that you are honest in regard to
                        your activity level since most people overestimate how
                        much they workout (i.e. they choose 'Heavy Exercise'
                        when they should choose 'Light Exercise'), which could
                        result in them gaining too much weight from fat if the
                        activity level was set too high, or not gaining anything
                        if the activity level was set too low. You should use
                        the TDEE calculator as a reasonable estimate to start
                        with and adjust your calories up or down based on your
                        weight change over time.
                      </p>
                      <h4>Protein Intake</h4>
                      <p>
                        It is also important to ensure that you consume enough
                        protein in order to maintain and build muscle. It is
                        vital that you consume a sufficient level of protein in
                        grams per day, which is roughly 2x of your body weight
                        in kg (e.g. 80kg individual should consume 160g protein
                        per day).
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Training On A Bulk </Accordion.Header>
                    <Accordion.Body>
                      <h4>Weight Training</h4>
                      <p>
                        This type of training at a caloric surplus allows an
                        individual to increase their muscle. For example, if an
                        individual has a "Bulking Calories" of 3000kcal per day,
                        this would be an increase of 500kcal above their
                        maintenance calories. This will allow the individual to
                        gain weight, as their body has more energy than required
                        for its daily needs. Being in a surplus allows for a
                        stimulus for muscle growth under conditions that the
                        muscles are being stimulated for growth, which can be
                        achieved through weightlifting. Thus, allowing an
                        individual to build muscle size and strength if they
                        consume adequate protein and follow a weightlifting
                        routine. Individuals can expect to make muscle size
                        gains as well as strength gains during this bulking
                        phase.
                      </p>

                      <h4>Weightlifting Training Routines</h4>
                      <p>
                        There are many different types of routines, but to keep
                        things simple, it is best to choose one of three
                        training splits such as Push/Pull/Legs, Upper/Lower or
                        Full Body. These are all good choices, but it comes down
                        to your lifestyle and how you can fit exercise around
                        your life. Below are some examples of weightlifting
                        training routines that you can follow:
                      </p>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2020/03/PULL-WORKOUT-PDF-updated.pdf?__s=5ncp5ayzfntdgwew1hma"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Push/Pull/Legs Split (6x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.muscleandstrength.com/sites/default/files/workouts/upper_lower4day.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Upper/Lower Split (4x per week)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://builtwithscience.com/wp-content/uploads/2019/01/jeremyethier-FULL-BODY-WORKOUT-A-PDF-DL.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Full Body Split (3x per week)
                        </a>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Expert Advice </Accordion.Header>
                    <Accordion.Body>
                      <h4>How to Lean Bulk PROPERLY in 5 Steps by Ethier</h4>
                      <YouTube videoId="ZYJqTNvv1Ys" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Tab>
          </Tabs>
          <div className="mt-2"></div>
        </Row>
      </Container>
    </>
  );
}
