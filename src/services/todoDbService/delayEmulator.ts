export const delayEmulator = ({
  sleep: async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
});