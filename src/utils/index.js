export const modifyState = (isLoading, success, data, error) => ({
  isLoading: isLoading || false,
  success: success || null,
  data: data || null,
  error: error || null,
});

export const modifyCountry = (isLoading, success, data, error) => ({
  isLoading: isLoading || false,
  success: success || null,
  data: data || null,
  error: error || null,
});
