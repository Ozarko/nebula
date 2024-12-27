import "server-only";

import { Navigation } from "@components/layout/navigation";
import { SurveyTypeButton } from "@components/survey/buttons/survey-type-button";
import { getSurveysConfig } from "@services/get-surveys-config";
import { Main } from "@ui/layout/main";
import { Section } from "@ui/layout/section";
import { TypographyH1 } from "@ui/typography/typographyH1";
import { TypographyP } from "@ui/typography/typographyP";

export default function Home() {
  const surveysConfig = getSurveysConfig();

  return (
    <>
      <Navigation
        navConfig={{ variant: "special" }}
        navLogoConfig={{ variant: "secondary" }}
      />
      <Main variant="special">
        <Section>
          <div className="flex flex-col  max-w-sub-container">
            <TypographyH1 variant="special" className="mb-5">
              Welcome to Nebula
            </TypographyH1>
            <TypographyP variant="special" className="mb-10">
              Discover the best psychics and astrologers to guide you on your
              journey to happiness.
            </TypographyP>
            <div className="flex flex-col gap-4">
              {surveysConfig.map(({ surveyType, initialUrl }) => (
                <SurveyTypeButton
                  key={surveyType}
                  href={initialUrl}
                  surveyType={surveyType}
                  variant="special"
                >
                  Start {surveyType} Survey
                </SurveyTypeButton>
              ))}
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
