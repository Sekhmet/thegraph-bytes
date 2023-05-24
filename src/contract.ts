import { Bytes } from '@graphprotocol/graph-ts'
import { ProxyDeployed } from '../generated/Contract/Contract'
import { ExampleEntity } from '../generated/schema'

export function handleProxyDeployed(event: ProxyDeployed): void {
  const entity = new ExampleEntity('asdf')

  entity.arr = [Bytes.empty()]
  entity.save()
}
