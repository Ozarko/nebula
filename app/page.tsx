import "server-only";

import { SurveyStartButton } from "@components/survey/buttons/survey-start-button";
import { getSurveysConfig } from "@services/get-surveys-config";
import { Main } from "@ui/layout/main";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";

export default function Home() {
  const surveysConfig = getSurveysConfig();

  return (
    <>
      <Main variant="special">
        <div className="flex flex-col space-y-4 max-w-sub-container">
          <TypographyH2>
            Welcome to Nebula - Your Path to Clarity and Happiness
          </TypographyH2>
          <TypographyP>
            Discover the best psychics and astrologers to guide you on your
            journey to happiness. Gain insights, find clarity, and achieve your
            goals with personalized readings and professional guidance from
            Nebula.
          </TypographyP>
          {surveysConfig.map(({ surveyType, initialUrl }) => (
            <SurveyStartButton
              key={surveyType}
              href={initialUrl}
              surveyType={surveyType}
            >
              Start {surveyType} Survey
            </SurveyStartButton>
          ))}
        </div>
      </Main>
    </>
  );
}
