import ffi from 'ffi-cross'
import path from 'path'
const fftPath = path.join(__dirname, '../../src/main/utils/libfftw3-3.dll')
const processPath = path.join(__dirname, '../../src/main/utils/DATA_PROCESSING_DLL.dll')

console.log('=== fftPath ===', fftPath)

ffi.Library(fftPath)
const lib = ffi.Library(processPath, {
  AutoBaseline: ['int', ['pointer', 'pointer', 'int', 'pointer']]
})

console.log('=== lib 1 ===', lib)
export { lib }
