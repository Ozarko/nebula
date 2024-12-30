import { ChevronLeftIcon } from "@/libs/icons/chevron-left/chevron-left-icon";
import { ChevronLeftIconVariantsType } from "@/libs/icons/chevron-left/chevron-left-icon.config";
import { HistoryBackButton } from "@components/buttons/history-back";

export const NavigationHistoryBack = (props: ChevronLeftIconVariantsType) => {
  return (
    <HistoryBackButton>
      <ChevronLeftIcon {...props} />
    </HistoryBackButton>
  );
};
