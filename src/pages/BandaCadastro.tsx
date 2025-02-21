/* eslint-disable simple-import-sort/imports */
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { Helmet } from "react-helmet-async"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@radix-ui/react-separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { bandForm } from "@/schema/bandForm"


type BandForm = z.infer<typeof bandForm>

export default function BandaCadastro() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<BandForm>({ resolver: zodResolver(bandForm) });
  console.log(errors)
  async function handleRegister(data: BandForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Cadastro Completo', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleRegister(data)
          },
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }
  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <div className="flex flex-col justify-center w-[800px] gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastro dos Integrantes da Banda
            </h1>
          </div>

          <form className="gap-2 spacey-4" onSubmit={handleSubmit(handleRegister)} >
            <Separator />
            <p>Dados Pessoais do Integrante</p>
            <Separator className="w-full h-[2px] mt-1 mb-1 bg-slate-300" />
            <div className="flex flex-row gap-3">
              <div className="space-y-2 ">
                <Label htmlFor="registrationDate">Data da Matrícula </Label>
                <Input id="registrationDate" type="date" {...register('registrationDate')} />
                {errors.registrationDate && <span>A data que que ser inferior ou igual ao dia de hoje </span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="memberName">Nome</Label>
                <Input id="memberName" type="text" {...register('memberName')} placeholder="Digite o nome completo" className="w-[450px]" />
                {errors.memberName && <span> O nome é obrigatório </span>}
              </div>
              <div className="space-y-2 ">
                <Label htmlFor="birthdayDate">Data de Nascimento </Label>
                <Input id="birthdayDate" type="date" {...register('birthdayDate')} />
                {errors.birthdayDate && <span>A data do seu aniversário deve ser anterior ao dia de hoje</span>}
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-4 mb-4"  >
              <div className="space-y-2 w-[500px]">
                <Input id="address" type="text" {...register('address')} placeholder="Rua:" />
                {errors.address && <span>O endereço é obrigatório </span>}
              </div>
              <div className="space-y-2  w-[100px]">
                <Input id="addressNumber" type="number" {...register('addressNumber')} placeholder="Número" />
              </div>
              <div className="space-y-2 w-[150px]">
                <Input id="addressComplement" type="text" {...register('addressComplement')} placeholder="complemento" />
              </div>
            </div>

            <div className="flex flex-row gap-12 mt-4 mb-4 " >
              <div className="space-y-2 ">
                <Input id="addressCep" type="text" {...register('addressCep')} placeholder="CEP:" />
              </div>
              <div className="space-y-2 ">
                <Input id="addressCity" type="text"  {...register('addressCity')} placeholder="Sorocaba-SP" />
              </div>
              <div className="space-y-2 ">
                <Input id="email" type="email" {...register('email')} placeholder="email" />
                {errors.email && <span>O email é obrigatório e precisa ser válido</span>}
              </div>
            </div>
            <Separator className="w-full h-[1px] mt-1 mb-1 bg-slate-300" />
            <div className="flex flex-row gap-2 mt-4 mb-4 ">
              <Input id="no_apply" type="checkbox" {...register('no_apply')} className="w-4 h-4 mt-1 " />
              <span>Não aplicado</span>
            </div>
            <div className="flex flex-row gap-3 mt-4 mb-4">
              <div className="space-y-2">
                <Input id="shoes" type="number" {...register('shoes')} placeholder="Digite o número do calçado" />
              </div>
              <div className="space-y-2">
                <Input id="clothes" type="text" {...register('clothes')} placeholder="Digite o tamanho  da roupa" />
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-4 mb-4" >
              <div className="space-y-2">
                <Label htmlFor="instrumentDateIn">Codigo do instrumento</Label>
                <Input id="instrumentId" type="text" {...register('instrumentId')} placeholder="Digite o nome ou o código do instrumento que você recebeu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instrumentDateIn">Data de recebimento do instrumento</Label>
                <Input id="instrumentDateIn" type="date" {...register('instrumentDateIn')} />
                {errors.instrumentDateIn && <span>A data deve ser inferior ou igual ao dia de hoje</span>}
              </div>
            </div>
            <Separator className="w-full h-[1px] mt-1 mb-1 bg-slate-300" />
            <p>Dados do responsável</p>
            <div className="space-y-2 ">
              <Input id="nameAccountable" type="text" {...register('nameAccountable')} placeholder="Nome " className="w-full mt-4 mb-4" />
            </div>
            <div className="space-y-2">
              <Input id="accountableAddress" type="text" {...register('accountableAddress')} placeholder="Endereço Completo " className="w-full" />
            </div>
            <div className="flex flex-row gap-3 mt-4 mb-4">
              <div className="space-y-2">
                <Input id="cpfAccountable" type="text" {...register('cpfAccountable')} placeholder=" CPF ou RG " />
              </div>
              <div className="w-32 space-y-2">
                <Input id="phoneAccountable" type="phone" {...register('phoneAccountable')} placeholder=" Telefone " />
              </div>
              <div className="space-y-2 w-[450px]">
                <Input id="emailAccountable" type="email" {...register('emailAccountable')} placeholder="Email " />
              </div>
            </div>
            <Separator className="w-full h-[1px] mt-1 mb-1 bg-slate-300" />
            <p>Dados da Escola</p>
            <div className="space-y-2 ">
              <Input id="nameSchool" type="text" {...register('nameSchool')} placeholder="Nome da Escola" className="w-full mt-4 mb-4" />
            </div>
            <div className="space-y-2 ">
              <Input id="contactSchool" type="text" {...register('contactSchool')} placeholder="Nome do contato na escola" className="w-full mt-4 mb-4" />
            </div>
            <div className="space-y-2">
              <Input id="addressSchool" type="text" {...register('addressSchool')} placeholder="Endereço Completo " className="w-full" />
            </div>
            <div className="flex flex-row gap-3 mt-4 mb-4">
              <div className="space-y-2">
                <Input id="citySchool" type="text" {...register('citySchool')} placeholder=" Cidade " />
              </div>
              <div className="w-32 space-y-2">
                <Input id="phoneSchool" type="phone" {...register('phoneSchool')} placeholder=" Telefone " />
              </div>
              <div className="space-y-2 w-[450px]">
                <Input id="emailSchool" type="email" {...register('emailSchool')} placeholder="Email " />
              </div>
            </div>
            <Separator className="w-full h-[1px] mt-1 mb-1 bg-slate-300" />
            <p> Observações</p>
            <div className="space-y-2">
              <Textarea id="areaText" {...register('areaText')} placeholder="Area para anotações" />
            </div>
            <p>Area de Download de Documentos/fotos</p>
            <div className="space-y-2 ">
              <Input id="picture" type="file" {...register('areaFile')} placeholder="arquivos" />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>

    </>
  )
}
