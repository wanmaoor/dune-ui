let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
  console.log('xx: ', require.context('../../icons/', true, /\.svg$/))
  importAll(require.context('../../icons/', true, /\.svg$/));
} catch (error) {
}
