export interface IHomeDataProvider {
  children: (data: {
    totalProducts: string;
    onCreateProduct: () => void;
    isLoading: {
      totalProducts: boolean;
      createProduct: boolean;
    };
  }) => React.ReactNode;
}
