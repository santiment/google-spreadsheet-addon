require('../support/helper.js')

it('returns proper message on NoDataError_', () => {
  const func = () => { throw new san.NoDataError_() }
  expect(san.handleErrors_(func)()).to.deep.eq(['No data'])
})

it('returns proper message on InternalServerError_', () => {
  const func = () => { throw new san.InternalServerError_() }
  expect(san.handleErrors_(func)()).to.deep.eq(['Internal server error!'])
})

it('returns proper message on ServerError_', () => {
  const func = () => { throw new san.ServerError_() }
  expect(san.handleErrors_(func)()).to.deep.eq(['Server error!'])
})

it('returns proper message on ServerError_ with supplied optional text', () => {
  const func = () => { throw new san.ServerError_('Error message.') }
  expect(san.handleErrors_(func)()).to.deep.eq(['Server error! Error message.'])
})
