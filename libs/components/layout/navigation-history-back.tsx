import Image from "next/image";

import { HistoryBackButton } from "@components/buttons/history-back";

export const NavigationHistoryBack = () => {
  return (
    <HistoryBackButton>
      <Image src="/chevron.svg" alt="Back" width={24} height={24} />
    </HistoryBackButton>
  );
};
