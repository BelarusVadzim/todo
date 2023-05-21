export const delayEmulator = ({
  sleep: async function sleep (ms: number) {
    return await new Promise(resolve => setTimeout(resolve, ms));
  }
});