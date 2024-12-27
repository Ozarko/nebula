import {
  ChevronLeftIcon,
  ChevronLeftIconVariantsType,
} from "@/libs/icons/chevron-left/chevron-left-icon";
import { HistoryBackButton } from "@components/buttons/history-back";

export const NavigationHistoryBack = (props: ChevronLeftIconVariantsType) => {
  return (
    <HistoryBackButton>
      <ChevronLeftIcon {...props} />
    </HistoryBackButton>
  );
};
